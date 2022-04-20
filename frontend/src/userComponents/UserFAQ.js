//import './FAQ.css';

const UserFAQ = ({que, ans})=>{
    return(
        <main class="faq">
			 <div class="faq__holder">
			  <h1 class="faq__heading">FAQ</h1>

			  <details class="faq__detail">
			      <summary  class="faq__summary"><span class="faq__question"> {que}</span></summary>
			      <p class="faq__text"> {ans}</p>
			  </details>

			</div>
			</main> 
    );
}

export default UserFAQ;