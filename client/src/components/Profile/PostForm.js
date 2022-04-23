function PostForm(props){

    let  { formData, handleSubmit, handleInputChange,categories }  = props;


    return <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="form-control" id="Title" aria-describedby="TitleHelp" />
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
                <textarea name="description" value={formData.description} onChange={handleInputChange} className="form-control" id="description" />


            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>




}

export default PostForm;