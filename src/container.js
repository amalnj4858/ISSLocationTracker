import React from 'react'

const Container = ({Lat,Long})=>{
	return(
	<div className='dib br4 ba bw1 pa3 ma3' id ='container'>
    <div class='long dib br3 bb br bw1 ma4 pa2'>LATITUDE: {Lat}</div>
    <div class='lat dib br3 bb br bw1 ma4 pa2'>LONGITUDE: {Long}</div>
    </div>
		);
}

export default Container;