import React from 'react'


class Errorboundary extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			isError : false
		}
	}



	didComponentCatch(){
		this.setState({isError:true});
	}

	render(){
		if(!this.state.isError)
			return(
				<div>
				{this.props.children}
				</div>
				);
		else
		return(<div className ='tc'>SORRY, THERE SEEMS TO BE AN ISSUE WITH THE SERVER. PLEASE TRY LATER.</div>);
	}
}

export default Errorboundary;