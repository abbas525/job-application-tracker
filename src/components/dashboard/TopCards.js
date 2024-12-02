
import { Button, Card, CardBody } from "reactstrap";

const TopCards = (props) => { 
  return (
    <Card>
      <a onClick={() => props.handleFilter(props.title, props.index, props.bookmark)} className={props.activeIndex === props.index && 'active'}>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block bg-light ${props.classes}`}>
            <i className={props.icon}></i>
          </div>
          <div className="ms-3">
            <h3 className={`mb-0 font-weight-bold ${props.activeIndex === props.index && 'text-white'}`}>{props.count}</h3>
            <small className={`${props.activeIndex === props.index ? 'text-white' : 'text-muted'}`}>{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
      </a>  
    </Card>
  );
};

export default TopCards;
