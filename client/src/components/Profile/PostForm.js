import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';



function PostForm(props) {

    let { formData, handleSubmit, categories } = props;


    const renderError = (message) => <div className="text-danger">{message}</div>;

    const validationSchema = Yup.object({

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

                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <Field name="title" type="text" className={(formik.errors.title && formik.touched.title) ? 'form-control is-invalid' : "form-control"} placeholder="Title" id="Title" />
                        <ErrorMessage name="title" render={renderError} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <Field as="select" name="category_id" className={(formik.errors.category_id && formik.touched.category_id) ? 'form-control is-invalid' : "form-control"}>
                        <option value={""} key={0}>Select</option>
                            {categories.map((category) => {
                                const { title, id } = category;
                                return <option value={id} key={id}>{title}</option>;
                            })}
                        </Field>
                        <ErrorMessage name="category_id" render={renderError} />

                        {/* <select className="form-control" name='category_id' onChange={handleInputChange} value={formData.category_id}>
                            <option value={""} key={0}>Select</option>

                            {categories.map((category) => {
                                const { title, id } = category;
                                return <option value={id} key={id}>{title}</option>;
                            })}
                        </select> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <Field name="description" component="textarea" className={(formik.errors.description && formik.touched.description ) ? 'form-control is-invalid' : "form-control"}  placeholder="Description" id="description" />
                        <ErrorMessage name="description" render={renderError} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )}


        </Formik>);




}

export default PostForm;