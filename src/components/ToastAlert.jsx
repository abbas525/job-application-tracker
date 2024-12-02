import { Toast, ToastBody, ToastHeader } from "reactstrap";

const ToastAlert = ({heading, body, classes}) => {
    return (

        <div className="p-3 my-2 rounded  position-fixed" style={{ top: '0px', right: '0' }}>
            <Toast>
                <ToastHeader className={classes}>
                     {heading}
                </ToastHeader>
                <ToastBody>
                    {body} 
                </ToastBody>
            </Toast>
        </div>

    );
}

export default ToastAlert;