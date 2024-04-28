import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Biology",
    "Psychology",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [SelectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);
  const handleChangeSelectedValue =(event)=>{
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value)
  }
  //handle book submission
  const handleBookSubmit =(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle =form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageURL =form.imageURL.value;
    const category =form.categoryName.value;
    const bookDescription =form.bookDescription.value;
    const bookPdfURL =form.bookPdfURL.value;
   const bookObj ={
    bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL
   }
   console.log(bookObj)
  

  //send data to db
  
  fetch("http://localhost:5000/upload-book",{
    method:"POST",
    headers:{
      "content-type":"application/json",
    },
    body:JSON.stringify(bookObj)
  }).then(res =>res.json()).then(()=>{
    //console.log(data)
    alert("Book Upload Successfully!!!")
    form.reset();
  })
  }
 
  return (
    


    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A book</h2>
      
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*Tittle book */}
        <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookTitle"
          value="Book Title" />
        </div>
        <TextInput id="bookTitle"
                   name='bookTitle'
                   type="text"
                  placeholder="book name"
                   required />           
      </div>
      {/*Author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="authorName"
          value="Author Name" />
        </div>
        <TextInput id="authorName"
                   name='authorName'
                   type="text"
                  placeholder="Author Name"
                   required />
      </div>
      </div>
      
          {/*image url row 2*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="imageURL"
          value="Book Image URL" />
        </div>
        <TextInput id="imageURL"
                   name='imageURL'
                   type="text"
                  placeholder="Book Image URL"
                   required />
      </div>
                    {/*Category */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="inputState"
          value="Book category" />
        </div>
        <Select id='inputState'
                 name='categoryName'
                 className='w-full rounded'
                 value={SelectedBookCategory}
                 onChange={handleChangeSelectedValue}>
                  {
                    bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
                  }

        </Select>
      </div>
      </div>  
      {/*book Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" 
                 value="Book Description" />
        </div>
        <Textarea
                   id="bookDescription" 
                   name="bookDescription"
                   placeholder="Write your book description...."
                   required
                   className='w-full'
                   row={6}
        />
      </div>

    {/* pdf book */}
    <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL"
                 value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfURL"
                   name='bookPdfURL'
                   type="text"
                   placeholder="book pdf url"
                   required />
      </div>
      
      <Button type="submit" className='mt-5'>
        Upload Book
        </Button>

    </form>
  </div>
  )
}

export default UploadBook