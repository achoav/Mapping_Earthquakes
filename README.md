# Mapping_Earthquakes

## Background

# Objective 
Build a new set of tools that will allow the USGS to visualize their earthquake data. The USGS collects a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations on issues facing our planet.

This will require knowledge of JavaScript, Leaflet.js, and geoJSON data.

# Deliverable 1: Add Tectonic Plate Data to the map 

Get the Data Set for the past 7 days:
The USGS provides earthquake data in several different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed page and pick a data set to visualize. When a data set is clicked on, for example 'All Earthquakes from the Past 7 Days', will be given a JSON representation of that weekly data. Use the URL of this JSON to pull in the data for the visualization.

## Import & Visualize the Data:

•	Create a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.
•	The data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes (>5) should appear larger and darker in color (red).  Magnitudes (>4 but less than <5) are colored in orange.  And other magnitudes that are smaller than 4, are colored in yellow.
•	The earthquake data and tectonic plate data displayed on the map when the page loads

## Deliverable 2: Add Major Earthquake Data to the map

•	Add a third layer group variable for the major earthquake data.
•	Add a number of base maps to choose from as well as separate out the two different data sets into overlays that can be turned (toggled) on and off independently.
•	Add layer controls to the map.

## Deliverable 3: Add an Additional Map with Tectonic plates and Seismic activity

•	Add an third Map with Tectonic plates and Seismic activity
