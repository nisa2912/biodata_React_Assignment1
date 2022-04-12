function Experience(props){
    return(
        <div className = "experience">
            <h2>Experience</h2>
            <ul>
                {props.experiences.map(experience => (
                    <li>
                        {experience}
                    </li>
                ))}
            </ul>
          </div>
    )
}
export default Experience;