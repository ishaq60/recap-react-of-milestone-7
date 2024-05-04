

const SingleBookMark = ({bookmark}) => {
    console.log(bookmark);
    const{title}=bookmark
    return (
        <div className="bg-slate-200 rounded-2xl p-4 m-4">
          <h3 className="text-2xl"> {title}</h3>
        </div>
    );
};

export default SingleBookMark;