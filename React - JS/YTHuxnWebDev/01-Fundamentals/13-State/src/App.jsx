import './App.css';
import Counter from './ExerciseComponents/Counter';
import Profile from './ExerciseComponents/Profile';
import ShoppingList from './ExerciseComponents/ShoppingList';
import TodoList from './ExerciseComponents/TodoList';
import BC from './LiveWork/1-BasicCounter/BC';
import UA from './LiveWork/2-UpdatingArrays/UA';
import UO from './LiveWork/3-UpdatingObject/UO';
import UAOfO from './LiveWork/4-UpdateArrayOfObject/UAOfO';
import SSCombine from './LiveWork/5-SharingState/SSCombine';
import AllExample from './LiveWork/6-PassingFunctionAsAValue/AllExample';

const App = () => {
  return (
    <>

      {/* ------LIVE - WORK------ */}
      {/* <BC /> */}
      {/* <UA /> */}
      {/* <UO /> */}
      {/* <UAOfO /> */}
      {/* <SSCombine /> */}
      {/* <AllExample/> */}

      {/* ------EXERCISE - WORK------ */}
      {/* <Counter /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      <TodoList />
    </>
  )
}

export default App;