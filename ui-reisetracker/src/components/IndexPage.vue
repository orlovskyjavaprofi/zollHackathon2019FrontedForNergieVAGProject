<template>
  <form @submit.prevent="handleSubmit">
    <div class="SendRouteForm">
      <h1>
        Prototype: 001
        <br>
        <u>{{ msg }}</u>
        <br>developed by Alexander Orlovsky in dragon team during
        <u>hackathon june of 2019</u>
      </h1>

      <div align="left">
        &nbsp;
        <b>
          Bitte geben Sie Ihre Start und Endhaltestelle
          <br>&nbsp;&nbsp;Please type your start and end station
        </b>
      </div>
      <br>
      <div align="left">
        &nbsp;&nbsp;
        <b>Startpoint / Starthaltestelle:</b>&nbsp;&nbsp;
        <input v-model="user.startPoint" id="startPoint">
        <br>
        <br>&nbsp;&nbsp;
        <b>Endpoint / Endhaltestelle:</b>&nbsp;&nbsp;&nbsp;&nbsp;
        <input v-model="user.endPoint" id="endPoint">
      </div>
      <div align="left">
        <br>&nbsp;&nbsp;
        <button type="submit">Show the route on the map</button>&nbsp;
        <button type="reset">Clear form</button>
      </div>
      <div align="left">
        <br>&nbsp;&nbsp;
        <label>
          <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>&nbsp;&nbsp;
          <button @click="addMarker">Add</button>
        </label>
        <gmap-map ref="mapRef" :center="center" :zoom="12" style="width:60%;  height: 350px">
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  name: "IndexPage",
  props: {
    msg: String
  },

  data() {
    return {
      center: { lat: 49.453872, lng: 11.077298 },
      markers: [],
      places: [],

      currentPlace: null,
      user: {
        startPoint: "",
        endPoint: ""
      }
    };
  },

  mounted() {
    this.geolocate();
  },

  setPlace(place) {
    this.currentPlace = place;
  },

  addMarker() {
    if (this.currentPlace) {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
    }
  },

  geolocate: function() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  },

  methods: {
    handleSubmit() {
      let startPointForServer = document.querySelector("input[id=startPoint]")
        .value;
      let endPointForServer = document.querySelector("input[id=endPoint]")
        .value;
      console.log(startPointForServer + " " + endPointForServer);
      //Get Hold of map     
      //Make some sort of conversion of startposition and endposition
      //then let google services to calculate the route
      //then make a request to google service to get the route with all of services
    },
    
    setPlace(place) {
      this.currentPlace = place;
    },

    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },

    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
