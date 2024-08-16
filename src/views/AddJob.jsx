import ApplicationForm from "../components/forms/ApplicationForm";

const AddJob = () => {
  return (
    <>
      <h1>New Job</h1>

      <section id="app-form">
        <div className="container">
          <div className="row justify-content-end my-5">
            <div className="col-md-8">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJob;
