import { Col, Row } from "reactstrap";
import TopCards from "../components/dashboard/TopCards";
import Feeds from "../components/dashboard/Feeds";
import MonthlyStats from "../components/dashboard/MonthlyStats";
import RecentApps from "../components/dashboard/RecentApps";
import FilteredTable from "../components/dashboard/FilteredTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchJobs } from "../views/jobs/jobSlice";

const Dashboard = () => {


    const jobData = useSelector(state => state?.job);
    const dispatch = useDispatch();

    const filteredTable = useRef()
    const [tableTitle, setTableTitle] = useState('')
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [appliedJobs, setAppliedJobs] = useState(0)
    const [bookmarkedJobs, setBookmarkedJobs] = useState(0)
    const [notRespondedJobs, setNotRespondedJobs] = useState(0)

    useEffect(() => {
        dispatch(fetchJobs());
      }, [dispatch]);

    useEffect(() => { 
        if (!jobData?.job) return;

        let appliedJobs = 0;
        let bookMarks = 0;
        let notResponded = 0;

        jobData?.job?.forEach(job => {
            if (job.status === 'Applied') {
                appliedJobs += 1;
            }
            else if (job.status === 'Not Responded') {
                notResponded += 1;
            }
             if (job.bookmark) {
                bookMarks += 1;
            } 
        });

 
        setAppliedJobs(appliedJobs)
        setNotRespondedJobs(notResponded)
        setBookmarkedJobs(bookMarks)


    }, [jobData]);


    const handleFilter = (title, id, bookmark) => {
         bookmark ?  
         setData(jobData?.job?.filter((item) => item.bookmark)) : 
         setData(jobData?.job?.filter((item) => item.status === title)) 

          setTableTitle(title);

        filteredTable.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveIndex(id)
    }





    //Cards Data
    const cardData = [
        {
            subtitle: "Bookmarked",
            count: bookmarkedJobs,
            icon: "bi bi-bookmarks-fill",
            title: "BookMarked",
            bookmark: true
        },
        {
            subtitle: "Jobs Applied",
            count: appliedJobs,
            icon: "bi bi-briefcase-fill",
            title: "Applied",
        },
        {
            subtitle: "Not Responded",
            count: notRespondedJobs,
            icon: "bi-x-circle-fill",
            title: "Not Responded",
        },

    ];



    return (

        <div className="dashboard">
            <Row>
                {cardData.map((card, index) => (
                    <Col sm="6" lg="4" key={index}>
                        <TopCards
                            subtitle={card.subtitle}
                            count={card.count}
                            icon={card.icon}
                            handleFilter={handleFilter}
                            title={card.title}
                            index={index}
                            activeIndex={activeIndex}
                            bookmark={card.bookmark || ''}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col lg="8">
                    <MonthlyStats allData={jobData?.job} />
                </Col>
                <Col lg="4">
                    <RecentApps />
                </Col>
            </Row>

            <Row>
                <Col sm="12">
                    <FilteredTable ref={filteredTable} data={data} title={tableTitle} icon={cardData[activeIndex]?.icon} />
                </Col>
            </Row>

        </div>
    );
}

export default Dashboard;