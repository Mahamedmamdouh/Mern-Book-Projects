import { useState } from 'react';
import {useParams,useLoaderData} from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';


export const EditBook = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL} = useLoaderData();
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
  const handleUpdate =(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle =form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageURL =form.imageURL.value;
    const category =form.categoryName.value;
    const bookDescription =form.bookDescription.value;
    const bookPdfURL =form.bookPdfURL.value;

    const UpdateBookObj ={
     bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL
    }
  // console.log(bookObj)
  //Update book date
  fetch(`http://localhost:5000/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(UpdateBookObj),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // alert is not working !!!!!!
      alert("Book is Updated Successfully!!!");
    })
    .catch((error) => {
      console.error("Error updating book:", error);
      // Handle error (e.g., show an error message to the user)
    });
  }
 
  return (
    
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
      
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
                   required
                   defaultValue={bookTitle} />           
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
                   required 
                   defaultValue={authorName}/>
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
                   required
                   defaultValue={imageURL} />
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
                   defaultValue={bookDescription}/>
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
                   required
                   defaultValue={bookPdfURL} 
                   />
      </div>
      
      <Button type="submit" className='mt-5'>
        Update Book
        </Button>

    </form>
  </div>
  )
}
