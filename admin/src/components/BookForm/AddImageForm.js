const AddImageForm = (props) => {
  const imgRef = useRef()
  const addImageHandler = (event) => {
    event.preventDefault();
    
  };
  return (
    <form onSubmit={addImageHandler}>
      <input type="text" placeholder="Thêm URL hình ảnh" useRef={imgRef}></input>
      <button className="btn-dark">Thêm hình ảnh</button>
    </form>
  );
};

export default AddImageForm;
