import React from 'react'
import { useNavigate } from "react-router-dom";

const frames = [
  {
    id: 1,
    title: "AI in the Domain",
    subTopics: [
      { id: 101, name: "Domain", description: "With which domain is the course associated?" },
      { id: 102, name: "Potential AI Use Cases", description: "What are potential use cases of using AI in the domain?." },
      { id: 103, name: "Data in the Domain", description: "What type of data is most common in the domain? Is data in the domain abundant or scarce?" },
      { id: 104, name: "Implications of using AI in the Domain", description: "What implications (ethical, legal, social) does the use of AI havein the domain / the use case?" },
      { id: 105, name: "Additional Learning Resources", description: "What additional (external) material or resources could be used? What Open Educational Resources could be helpful?" }
    ]
  },
  {
    id: 2,
    title: "Learning Environment",
    subTopics: [
      { id: 201, name: "Learners and their Interaction with AI", description: "What existing AI knowledge and skills do the learners have? What other related skills and knowledge do the learners have? What role in the AI interaction are learners supposed to take after completing the course?" },
      { id: 202, name: "Instructors", description: "What AI-related skills and competencies do the instructors have?" },
      { id: 203, name: "Internal Support", description: "What time and AI-related resources are available? What AI-related data is available for the course? What support does the institution or the network provide?" }
    ]
  },
  {
    id: 3,
    title: "Course Implementation",
    subTopics: [
      { id: 301, name: "Learning Outcomes", description: "What are the relevant learning outcomes of the course?" },
      { id: 302, name: "Assessment", description: "How will the learning outcomes be assessed?" },
      { id: 303, name: "Learning Activities", description: "What learning activities will be included in the course? What didactical approach will be taken? " }
    ]
  },
];

const gradients = [
  "linear-gradient(to right, #e7489f,#e74765",
  "linear-gradient(to right,#06b6d0, #13b8a6)",
  "linear-gradient(to right,#f86f19, #ef4542)",
  "linear-gradient(to right,#3d80f5, #6266f1)",
  "linear-gradient(to right,#f76e6e, #e94b4b)",
  "linear-gradient(to right,#f9cb14, #e2ab0c)",
  "linear-gradient(to right,#c181f7, #ec4797)",
  "linear-gradient(to right, #7f8bf7,#5d86f6)",
];


function Test() {

  const navigate = useNavigate();

  return (
    <div className='conatainer my-5 mx-5'>

    {/* Back Button Navigation */}
    <div>
        <button onClick={() => navigate(-1)}
          style={{ border: "none", background: "none", cursor: "pointer", fontSize: "18px" }}
        >
          ← Back
        </button>
        <h1 style={{ marginLeft: "10px", fontSize: "24px", color: "#4A4A8B" }}>View Template</h1>
      </div>


      <div className="row g-4">
        {frames.map((frame, index) => {
          return (
            <div
              key={frame.id}
              className="col-lg-4 col-md-6 col-sm-12"
            >
              <h3 className="font-bold mb-2">{frame.title}</h3>
            </div>
          )
        })}
      </div>
      <div className="row g-4">
        {frames.map((frame, index) => {
          return (
            <div
              key={frame.id}
              className="col-lg-4 col-md-6 col-sm-12"
              >
              {frame.subTopics.map((subTopic, index) => {
                const gradient = gradients[index % gradients.length];
                return (
                  <div
                    style={{
                      background: gradient,
                      marginTop: "10px",
                      padding: "20px",
                      borderRadius: "12px",
                      color: "white",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      textAlign: "center",
                      width: "100%", // Ensures consistent card width
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <h3 className="font-bold mb-2">{subTopic.name}</h3>
                    <p>{subTopic.description}</p>
                    <input
                      type="text"
                      placeholder="Enter an idea.."
                      style={{
                        background: gradient,
                        borderRadius: "5px",
                        borderWidth: "0",
                        color: "white"
                      }}>
                    </input>
                    <div>
                    </div>
                  </div>);
              })},
              {/* <div
                style={{
                  background: gradient,
                  padding: "20px",
                  borderRadius: "10px",
                  color: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                  width: "100%", // Ensures consistent card width
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              // onClick={handleNavigate}
              >
                <h3 className="font-bold mb-2">{frame.title}</h3>
                <p>{frame.description}</p>
                <input
                  type="text"
                  placeholder="Enter an idea.."
                  style={{
                    background: gradient,
                    borderRadius: "5px",
                    borderWidth: "0",
                    color: "white"
                  }}>
                </input>
                <div>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Test
