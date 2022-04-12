import Experience from "./Experience";
import Interests from "./Interests";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

function BioData (props) {
    console.log(props);
    return (
        <div className = "bio-data">
          <h2>
            Bio Data of {props.name}
          </h2>
          <hr />
          <PersonalInfo
          name = {props.name}
          email = {props.email}
          phone = {props.phone}
          />

          <Skills
          skills = {props.skills}/>
          <Experience
          experiences = {props.experiences}/>
          <Interests
          interests = {props.interests}/>
          
          <hr />
          <p>
            Referenced By: {props.referencedBy}
          </p>
      </div>
    )
}

export default BioData;