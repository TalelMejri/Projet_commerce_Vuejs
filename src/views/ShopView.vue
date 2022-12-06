<template>
         <div class="mt-5 py-2">
                <div class="navbar_user position-fixed p-2 mb-5 fixed-top shadow-lg container-fluid d-flex justify-content-between">
                    <div class="mt-3 mx-1">
                       <img src="#" alt="" width="55px" height="55px">
                    </div>
                    <div class="d-flex gap-4 mx-2">
                        <div class="mt-4">
                              <span class="px-3 mt-5" style="cursor:pointer;position:relative" > 
                                  <span class=" position-relative" id="liveToastBtn" onclick="toasty('notif')">
                                              <i style="font-size:19px" ><font-awesome-icon icon="fa-solid fa-bell"/></i>
                                       <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                             15
                                       </span>
                                 </span>
                             </span>
                        </div>
                             <div class="mt-4">
                                <a href="../chat" class="text-decoration-none text-dark"> ss<i  style="font-size:25px" id="text"  class="fa-solid fa-message"></i></a> 
                             </div>
                            <div class="d-flex flex-column text-center ">
                                 <div class="show_profil"> <img  onclick="toasty('profil')" class=" rounded-circle  shadow-sm"  :src="'http://localhost:8000'+store.user['avatar']" width="20px" > </div>
                                 <button @click="logout()">sdsdsd</button>
                            </div>
                    </div>
              </div>
  
              <main class="py-5 container-fluid" >
            
                 <div class="container-fluid p-4">
                    <div class="left">
                    <a class="profile">
                <img src="#" width="70px" height="70px" alt="">
            
            <div class="handle">
                <h4>dddd</h4>
            </div>
          </a>

          <div class="sidebar">
            <a href="../ProfilUser/" class="menu-item">
                 <div class="d-flex"><span><i class="p-2"><font-awesome-icon icon="fa-solid fa-house-user "/></i></span><h3>Accueil</h3></div>
             </a>
             <a href="../listamis/" class="menu-item ">
                 <div  class="d-flex " ><span><i class="p-2"><font-awesome-icon icon="fa-solid fa-user "/></i></span><h3>Amis</h3></div>
             </a>
             <a  href="../pub_save/" class="menu-item ">
                 <div class="d-flex " ><span><i class="fa-sharp fa-solid fa-bookmark p-2 "></i></span><h3>Enregistrement</h3></div>
             </a>
             <a class="menu-item " href="../certificat/">
                 <div class="d-flex " ><span><i class="fa-solid fa-certificate p-2 "></i></span><h3>Certificat</h3></div>
             </a>
             <a   class="menu-item"  href="../get_all_user/index.php?changer">
                <div class="d-flex" ><span><i class="fa-solid fa-user-plus p-2"></i></span><h3>ADD Friend</h3></div>
             </a>
          </div>
          </div>
                    <div class="middle">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum perferendis vero?  
                    </div>
                    <div class="right">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit doloremque ea exercitationem alias facilis in aliquam nesciunt accusamus sequi accusantium.
                    </div>
                
              <div class="position-fixed bottom-0 end-0 p-3" id="body_notif" style="z-index: 11">
                      <div id="liveToast"  class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                          <strong class="me-auto">Notification</strong>
                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                      </div>
              </div>
   
              <div class="position-fixed bottom-0 end-0 p-2" id="side_profil" style="z-index: 11">
                <div role="alert" aria-li ve="assertive" id="profil" aria-atomic="true" class="toast" >
                   <div class="toast-header">
                     <strong class="me-auto">Settings </strong>
                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                   <div class="toast-body">
                     <div class="mosule d-flex justify-content-center">
                        <img src="#" width="70px" height="50px" class="rounded img-thumbnail shadow-sm" alt="">
                         <div class="body py-3 px-2">
                            <p class="m-0">{{store.user['name']}}</p>
                             <p class="font-weight-normal text-muted">{{store.user['email']}}</p>
                        </div>
                    </div>
                    
                 <ul class="list-unstyled flex-column ps-0 mx-5">
                <li class=" py-2">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                      <span style="font-size:18px"> <i class="fa-solid fa-gear px-2"></i>  Parametres </span> 
                  </button>
                  <div class="collapse show" id="home-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="../profiluser"  class="link-dark rounded">Changer Password <i class="fa-solid fa-lock px-2"></i></a></li>
                      <li><a href="../profiluser"  class="link-dark rounded">Edit Profil<i class="fa-solid fa-pen-to-square px-2"></i></a></li>
                      <li><a href="../message"  class="link-dark rounded">Langue<i class="fa-solid fa-globe px-2"></i></a></li>
                    </ul>
                  </div>
                </li>
           <li class="">
             <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                <span style="font-size:18px"><i class="fa-solid fa-moon px-2"></i>Affichage</span> 
             </button>
                   
             </li>
             </ul>
             <button class="btn btn-white align-items-center rounded mx-4">
                <a class="link-dark rounded text-decoration-none" href="../logout.php"><span style="font-size:18px">Log out <i class="fa-solid fa-right-from-bracket"></i> </span> </a>
             </button>
            <div class=" py-2">
      <div class="row mt-2">
        <div class="col-lg-12 text-center">
       <a href="##"> Confidentialité  · Conditions générales  · Publicités  · Choix publicitaires   · Cookies  ·   · BIZO © 2022</a>
             </div>
            </div>               
          </div>
      </div>
        </div>
              </div>
                 </div>
              </main>
    </div>
</template>

<script>

import { useAuthStore } from '@/store/auth.store';

export default {
     setup(){
          const store=useAuthStore();
          return {
               store
          }
     },
     data(){
          return{
              
          }
     },
     methods: {
          logout(){
               this.store.logout();
          }
     },
}

</script>