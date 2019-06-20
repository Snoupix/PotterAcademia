import React from "react";
import Background from "./assets/img/431.jpg";
import Quote from "./assets/img/quote.png";
import Tache from "./assets/img/ink_corner.png";
import TacheWhite from "./assets/img/ink_corner_white.png"
import "./Section.css";

const sectionStyle = {
  width: "100%",
  height: "auto",
  minHeight: "1077px",
  backgroundImage: "url(" + Background + ")",
  padding: "0"
};
const quoteStyle = {
  margin : "0 auto",
  marginTop: "15%",
  transform: "scale(1.3)",
  position: "absolute",
  marginLeft : "-12%",
};
const tacheStyle = {
  right: "-600px",
  top: "-500px",
  transform: "scale(0.5)",
  position: "fixed",
  zIndex : 4,
};
const tacheStyleWhite = {
  right: "-600px",
  top: "-500px",
  transform: "scale(0.5)",
  position: "fixed",
  zIndex : 4,
};


class Section extends React.Component {
  

  
  
  state = {
    isVisible: 2,
    animationisplaying: 0,
    classDiv: "cd-transition-layer visible"
  };

  Clickopen(e) {
    e.preventDefault();
    this.props.changeState()
    this.setState({ animationisplaying: 1 });
  }

  
  Clickclose(e) {
    e.preventDefault();
    this.props.changeState()
    this.setState({ animationisplaying: 2 });
  }

  Visible(x){ this.props.changeState()
    x = this.state.isVisible
    return x;
  }


  render() {
    

    return (
      <div className="App" animation={this.state.animationisplaying}>
      <div className={this.state.animationisplaying===0? "cd-modal" : this.state.animationisplaying===1? "cd-modal visible" : this.state.animationisplaying===2? "cd-modal" : ""}>
	<div className="modal-content">
		<h1>My Modal Content</h1>
		
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi repellendus, optio eveniet eligendi molestiae? Fugiat, temporibus! A rerum pariatur neque laborum earum, illum voluptatibus eum voluptatem fugiat, porro animi tempora? Sit harum nulla, nesciunt molestias, iusto aliquam aperiam est qui possimus reprehenderit ipsam ea aut assumenda inventore iste! Animi quaerat facere repudiandae earum quisquam accusamus tempora, delectus nesciunt, provident quae aliquam, voluptatum beatae quis similique in maiores repellat eligendi voluptas veniam optio illum vero! Eius, dignissimos esse eligendi veniam.
		</p>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis saepe amet sit fugit rerum, corporis minus vitae officia quaerat incidunt voluptate, blanditiis ea est quibusdam voluptas animi quasi totam magni, commodi praesentium. Possimus quam illo ipsam iste unde totam cupiditate deleniti, impedit assumenda hic eligendi natus tempora dolores quod mollitia ab non sunt eaque adipisci, suscipit quas aliquid officiis beatae. Necessitatibus voluptatibus, perferendis tenetur perspiciatis adipisci nesciunt eum ex fuga commodi iure numquam enim rem ullam labore nisi magni sint voluptatem quos! Eum iure exercitationem voluptates repellendus culpa doloremque laborum animi illum, sint fugit soluta possimus a fuga veritatis molestias corporis placeat illo pariatur dolor reiciendis earum, sapiente omnis. Placeat maiores omnis, porro officia, laborum eos. Fugiat mollitia inventore consequuntur odit eaque, rerum recusandae, eum sint molestiae consequatur culpa deserunt quae aliquid dolor tempora tenetur architecto repellendus enim quasi atque, odio voluptas. Tenetur repellendus explicabo ipsum inventore quia aut eos expedita necessitatibus asperiores blanditiis! Delectus nisi laudantium ipsum! Quasi blanditiis corrupti dicta maiores placeat laboriosam delectus ipsum facere voluptas, magnam voluptatibus, perferendis alias ullam saepe, perspiciatis recusandae voluptates, dolores praesentium?
		</p>
	</div>
  </div>
      <div
        className={
          this.state.animationisplaying===0
            ? "cd-transition-layer visible" :  this.state.animationisplaying===1
            ? "cd-transition-layer visible opening" :   this.state.animationisplaying===2
            ? "cd-transition-layer visible opening closing" : ""
        }
      >
      <div style={{margin : "0 auto", justifyContent : "center"}}>
      <img src={Quote} style={ quoteStyle }></img>
      </div>
        <div className="section1light" style={sectionStyle}>
          <img src={Background} />
          <img className={this.state.animationisplaying===1? " imgblack invisible" : "imgblack visible"} src={Tache} style={tacheStyle} />
          <img className={this.state.animationisplaying===1? "imgwhite visible" : "imgwhite invisible"} src={TacheWhite} style={tacheStyle} />
          <div style={{position:"fixed"}}
            onClick={e => this.Clickopen(e)}
            className={this.state.animationisplaying===1? "cd-btn cd-modal-trigger" : "cd-btn cd-modal-trigger visible"}
          >
            
          </div>
          <div
          style={{position:"fixed"}}
            onClick={e => this.Clickclose(e)}
            className={this.state.animationisplaying===1? "cd-btn cd-modal-trigger visible" : "cd-btn cd-modal-trigger"}
          >
            
          </div>
        </div>
        <div className="bg-layer" />
      </div>
      </div>
    );
  }
}

export default Section;
