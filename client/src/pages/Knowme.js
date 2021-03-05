import React from 'react'

const Knowme = () => {
    return (
        <div>
           <h2 style={{textAlign:'center',margin:'10px'}}>Hello !! Welcome to CODE WORKSPACE!!</h2>
           <div>
               <ul className="know-me">
                   <li>
                       <h4>What is Code Workspace ?</h4>
                       <ul>
                           <li>
                                <p>This is a coding platform which you can use to solve coding problems.</p>
                           </li>
                           <li>
                                <p>The platform has a advanced code editor which will help you to code faster. </p>
                           </li>
                           <li>
                                <p>You can use this during a competitve programming contest. You can grab the question and can test your code with custom input.</p>
                           </li>
                           <li>
                                 <p>You can also save your code templates if you wish to revisit them.</p>
                           </li>
                       </ul>
                    </li>
                   <li style={{marginTop:'10px'}}>
                       <h4>How to use it ?</h4>
                       <ul>
                           <li>
                                <p>Go to the <b>Viewer</b> section. Now this is our coding platform.</p>
                           </li>
                           <li>
                                <p>Just Type the problem id of the question from the contest and click on the Parse Button.</p>
                                <p>eg. 1400A - where 1400 is the Contest Number and A is the problem id.</p>
                           </li>
                       </ul>
                    </li>
               </ul>
               
           </div>
           <footer className='copyright-footer'>
          Copyright &copy; created by - {' '}
          <a href='https://www.linkedin.com/in/rishabh-kothari-4b6248190/'>
          Rishabh Kothari
          </a>
        </footer>
        </div> 
    )
}

export default Knowme
