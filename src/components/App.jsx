import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Job from "./Job";
import TableHeader from "./TableHeader";

function App() {
    const [jobs, setJobs] = useState([]);

    function addJob(newJob) {
        setJobs(prevJobs => {
            return [...prevJobs, newJob];
        });
    }

    function addEditedJob(editedJob) {
        setJobs(jobs.map((jobList, index) => {
            if (index === editedJob.id) {
                return jobList = editedJob;
            } else {
                return jobList;
            }
        }));
    }

    function editJob(id) {
        setJobs(prevJobs => {
            return prevJobs.filter((jobList, index) => {
                return index === id;
            });
        });
    }
  
    function deleteJob(id) {
        setJobs(prevJobs => {
            return prevJobs.filter((jobList, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <div>
                <Header saveJob={addJob} />
                <TableHeader />
            </div>
            <div className="content"> 
                {jobs.map((jobList, index) => {
                    return (
                        <Job
                            key={index}
                            id={index}
                            title={jobList.title}
                            company={jobList.company}
                            location={jobList.location}
                            link={jobList.link}
                            removeJob={deleteJob}
                            saveJob={addJob}
                            updateJob={editJob}
                            saveEdit={addEditedJob}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}

export default App;
