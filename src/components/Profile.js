import React, {useState} from  "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import "../assets/css/profile.css";


const Profile = ({data})=>{
    const [isLoaded, setIsLoaded] = useState(true)
   
    return (
      
      <div className="Profile-main-card">
          
            <div className="candidate-image">
                <img onLoad={()=>setIsLoaded(false)} src={data && data.user_image_url && data.user_image_url} alt="profile"  style={{ visibility: isLoaded ? "hidden" : "visible" }}/>
            </div>
         
            <div className="canddate-info">
                <div className="about">
                    <p>
                        {data && data.jobseeker_name ? data.jobseeker_name : ""} |
                        <LocationOnIcon/>
                        <span>
                            {data && data.area ? data.area : ""}, {data && data.distric ? data.distric : ""}
                        </span>
                    </p>
                </div>

                <div className='experience'>
                    <span className="icon"> 
                        <BusinessCenterIcon/>
                    </span>
                    <span className="exper">Experience</span>
                    <span className="total">{data && data.total_months_exp ? data.total_months_exp + " months": ""}</span>
                  <br />
                    {data && data.user_experiences.map((ele, i) =>
                        <React.Fragment key={i}>
                            
                            {ele.company_logo && <div style={{display:"inline-block", float : "left", marginRight:"5px"}}><img src={ ele.company_logo} alt="compay_logo" style={{height : "30px",width : "30px"}}/></div>}
                        <div className='item'>
                           
                            <span className='area'>{ele.user_post ? ele.user_post : ""}</span>
                            <span className='company-name'>{ele.company_name ? ele.company_name :"" }</span>
                            <span className='time'>{ele.company_starting_date ? ele.company_starting_date: ""} - {data.user_experiences[0].company_ending_date ? data.user_experiences[0].company_ending_date: ""}</span>
                        </div>
                    </React.Fragment>
                    )
                    
                    }
                  
                    {data && (data.user_experiences.length > 1) &&
                    <React.Fragment>
                        <div className='item'>
                            <span className='area'>{data.user_experiences[0].user_post ? data.user_experiences[0].user_post : ""}</span>
                            <span className='company-name'>{data.user_experiences[1].company_name ? data.user_experiences[1].company_name :"" }</span>
                            <span className='time'>{data.user_experiences[0].company_starting_date ? data.user_experiences[0].company_starting_date: ""} - {data.user_experiences[1].company_ending_date ? data.user_experiences[1].company_ending_date: ""}</span>
                        </div>
                    </React.Fragment>
                    }
                    
                </div>

                <div className="education">
                    <span className='icon'><SchoolIcon/></span>
                    <span className='text'>Education</span>
                    {data && data.user_qualifications.map((ele, i) =><div className='details' key={i}>
                            {ele.course_name && <span className='info'>{`${ele.course_type ? ele.course_type+'-' : ""}`}{ele.course_name}</span>}
                            {ele.user_college && <span className='college-name'>
                            {ele.user_college} | {ele.user_passing_year ? ele.user_passing_year : "00"}
                            </span>}
                         </div> )}
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;