<template>
    <div>
        <article class="container py-5 mt-2 mb-5" data-aos="fade-up">
            <div class="text-center fw-bolder">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </div>
      <div class="row">
          <div class="col-lg-6">
          <div class="accordion accordion-flush text-center" id="faqlist2">
              <div class="accordion-item ">
                <h2 class="accordion-header text-center">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                   question 1 ?
                  </button>
                </h2>
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div class="accordion-body">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, impedit.
                  </div>
                </div>
              </div>
  
              <div class="accordion-item">
                <h2 class="accordion-header text-center">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-22">
                    question 2?
                  </button>
                </h2>
                <div id="faq-content-22" class="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div class="accordion-body">
                   Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="accordion accordion-flush text-center" id="faqlist1" >
              <div class="accordion-item ">
                <h2 class="accordion-header text-center">
                  <button class="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                   question 3 ?
                  </button>
                </h2>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div class="accordion-body">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, impedit.
                  </div>
                </div>
              </div>
  
              <div class="accordion-item">
                <h2 class="accordion-header text-center">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    question 4?
                  </button>
                </h2>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div class="accordion-body">
                   Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
          </div>
      </div>
      </div>
         </article>
    </div>
</template>

<script>
export default{
    name:'faq',
    data(){
        return{

        }
    }
}
</script>