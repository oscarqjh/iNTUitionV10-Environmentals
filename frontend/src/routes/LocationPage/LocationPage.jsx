import LabelBottomNavigation from "@/components/navbar/Navbar";

const LocationPage = () => {

  return (
  <>
    <div className="h-screen w-auto">
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=1ySyBcuorBk9s4c59jRkJhceMATM3fF2b&ehbc=2E312F" 
          width="100%" 
          height="91%"
        >  
        </iframe>
      
    </div>
    <LabelBottomNavigation />
    </>
  );
};

export default LocationPage;



// import React from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


  // const libraries = ["places"];
  // const mapContainerStyle = {
  //   width: "100vw",
  //   height: "100vh",
  // };
  // const center = {
  //   lat: 7.2905715, // default latitude
  //   lng: 80.6337262, // default longitude
  // };

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyAvNO-dnwhqWYX0R9yXtKIZfjcqPQowwnc",
  //   libraries,
  // });

  // if (loadError) {
  //   return <div>Error loading maps</div>;
  // }

  // if (!isLoaded) {
  //   return <div>Loading maps</div>;
  // }
      
  // <GoogleMap
  //       mapContainerStyle={mapContainerStyle}
  //       zoom={10}
  //       center={center}
  //     >
  //       <Marker position={center} />
  // </GoogleMap>