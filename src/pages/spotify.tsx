import React from "react";
import SpotifyComponent from '../components/SpotifyComponent'



function Spotify() {
  return (
    <SpotifyComponent></SpotifyComponent>
  );
}

export default Spotify;






export async function getServerSideProps() {
	return {
		props: {}, // will be passed to the page component as props
	};
}