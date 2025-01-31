/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("deviceready", onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

app.initialize();

function onDeviceReady() {
// Register the event listener
console.log('ok device ready');
document.addEventListener("backbutton", onBackKeyDown, false);
document.addEventListener("pause",()=>{
    document.getElementById("mainAudio").pause()
})
document.addEventListener("resume",()=>{
    if(JSON.parse(localStorage.getItem("checktwo"))==false){
        document.getElementById("mainAudio").play()
  }  
})
}

// Handle the back button
//
function onBackKeyDown(e) {
    if(JSON.stringify(document.URL).slice(-11,-1)== "index.html"){
        e.preventDefault();
        navigator.app.exitApp();
        console.log("1")
    }
    else {
        navigator.app.backHistory();
        console.log("2")
    }
}