import './App.css'
import PostContainer from './components/postContainer'
import SearchInput from './components/searchInput'

function App() {

  return (
    <div className='w-[50%] m-auto'>
		  <div className='text-center '>
				<h2 className='font-bold text-[22px]'>{`Najib's`} Blog</h2>    
				<p> My personal blog for writing things I want to see later </p>
		  </div>

		  <SearchInput></SearchInput>

		  <PostContainer></PostContainer>
	
		

	


    </div>
  )
}

export default App
