// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';  
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// const scene2 = new THREE.Scene();

// const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer2 = new THREE.WebGLRenderer({
//     alpha: true,
//     antialias:true,
//     canvas: document.querySelector('#three'),
//   });


//   console.log(window.devicePixelRatio)
//   renderer2.setPixelRatio(window.devicePixelRatio);
// renderer2.setSize(300, 300);
// camera2.position.setZ(30);
// camera2.position.setX(-3);


// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(25, 25, 25);

// const ambientLight = new THREE.AmbientLight(0xffffff,4);
// scene2.add(pointLight, ambientLight);

// const three = new THREE.TextureLoader().load('three_logo.png');

// const geometry = new THREE.SphereGeometry(10,32,32)
// const material = new THREE.MeshStandardMaterial( {map: three} ); 
// const cube = new THREE.Mesh( geometry, material ); 
// scene2.add( cube );

// renderer2.render(scene2, camera2);

// const controls2 = new OrbitControls( camera2, renderer2.domElement );

// controls2.enableZoom = false;

 


// controls2.update()

// const raycaster = new THREE.Raycaster();
// const pointer  =  new THREE.Vector2


// function onPointerMove(event){

//     pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
// }

 
// window.addEventListener( 'pointermove', onPointerMove );







// function animate(){
//     requestAnimationFrame(animate)
    

    
   
//     controls2.update()
//     renderer2.render(scene2,camera2)
//   }
  
//   animate()