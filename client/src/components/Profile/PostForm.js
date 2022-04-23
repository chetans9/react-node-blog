import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';



function PostForm(props) {

    let { formData, handleSubmit, handleInputChange, categories } = props;




    // const renderError = (message) => <p className="help is-danger">{message}</p>;

    const renderError = (message) => <div class="text-danger">{message}</div>;

    const validationSchema = Yup.object({
        // product: Yup.string().required("Please select a product").oneOf(products),
        title: Yup.string().required(),
        category_id: Yup.number().required(),
        description: Yup.string().required()


    });



    return (

        <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {formik => (

                <form>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        {/* <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="form-control" id="Title" aria-describedby="TitleHelp" /> */}


                        <Field name="title" type="text" className={(formik.errors.title && formik.touched.title) ? 'form-control is-invalid' : "form-control"} placeholder="Title" id="Title" />
                        <ErrorMessage name="title" render={renderError} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>

                        <select className="form-control" name='category_id' onChange={handleInputChange} value={formData.category_id}>
                            <option value={""} key={0}>Select</option>

                            {categories.map((category) => {

                                const { title, id } = category;

                                return <option value={id} key={id}>{title}</option>;
                            })}



                        </select>

                        {/* <Select options={Countries} /> */}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <Field name="description" component="textarea" className={(formik.errors.description && formik.touched.description ) ? 'form-control is-invalid' : "form-control"}  placeholder="Description" id="description" />


                        {/* <textarea name="description" value={formData.description} onChange={handleInputChange} className="form-control" id="description" /> */}
                        <ErrorMessage name="description" render={renderError} />


                    </div>
                    {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



            )}


        </Formik>);




}

export default PostForm;