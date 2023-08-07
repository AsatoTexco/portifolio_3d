import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';  
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

 
  $('html, body').animate({scrollTop:0}, 'slow');
 



// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer({
  antialias:true,
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3.2);

renderer.render(scene, camera);

// 3d model


const loader = new GLTFLoader();
var arthurAvatar

loader.load( 'avatar_gltf.gltf', function ( gltf ) {
  
  arthurAvatar = gltf.scene

  arthurAvatar.position.setZ(29.5)
  arthurAvatar.position.setX(-3)
  arthurAvatar.position.setY(-1.7)


  arthurAvatar.rotation.y = -0.33

  
 
	scene.add( arthurAvatar );

  

}, undefined, function ( error ) {

	console.error( error );

} );


 




const terraTextura = new THREE.TextureLoader().load('terra.jpg');

const geometry_terra = new THREE.SphereGeometry( 2, 32, 20 ); 
const material_terra = new THREE.MeshStandardMaterial({map: terraTextura })
const terra = new THREE.Mesh(geometry_terra,material_terra);
terra.position.setZ(25)
terra.position.setX(-1)

scene.add(terra)

 
// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(25, 25, 25);

const ambientLight = new THREE.AmbientLight(0xffffff,4);
scene.add(pointLight, ambientLight);

// const lightHelper =  new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200,50);

// scene.add(lightHelper,gridHelper)
 
// dps ativar 
// const controls = new OrbitControls(camera,renderer.domElement);

function addStar(){

  const geometry =  new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshBasicMaterial({color: 0xffffff});
  const star =  new THREE.Mesh(geometry,material);
  
  const [x, y, z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star)

}

Array(100).fill().forEach(addStar)


const spaceTexture = new THREE.Color('#011526')
scene.background = spaceTexture;

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');


const moon =  new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
)
scene.add(moon)


moon.position.z = -30;
moon.position.setX(-15);
moon.position.setY(20);


 

const aranha_robo = new THREE.TextureLoader().load('imgs/conquistas/aranha_armadeira_robotica.jpg')

const geometry_cube_aranha = new THREE.BoxGeometry( 1, 1, 1 ); 
const material_cube_aranha = new THREE.MeshBasicMaterial( {map: aranha_robo} ); 
const cube_aranha = new THREE.Mesh( geometry_cube_aranha, material_cube_aranha ); 
cube_aranha.position.setZ(31)
cube_aranha.position.setX(-3.2)
scene.add( cube_aranha );


const maratona_img = new THREE.TextureLoader().load('imgs/conquistas/1lugar_maratona_python_senac.jpg')

const geometry_cube_maratona = new THREE.BoxGeometry( 1, 1, 1 ); 
const material_cube_maratona = new THREE.MeshBasicMaterial( {map: maratona_img} ); 
const cube_maratona = new THREE.Mesh( geometry_cube_maratona, material_cube_maratona ); 
cube_maratona.position.setZ(36)
cube_maratona.position.setX(-3.2)
scene.add( cube_maratona );


const workshop_violino = new THREE.TextureLoader().load('imgs/conquistas/tocando_violino.jpg')

const geometry_cube_violino = new THREE.BoxGeometry( 1, 1, 1 ); 
const material_cube_violino = new THREE.MeshBasicMaterial( {map: workshop_violino} ); 
const cube_violino = new THREE.Mesh( geometry_cube_violino, material_cube_violino ); 
cube_violino.position.setZ(41)
cube_violino.position.setX(-3.2)
scene.add( cube_violino );



// add box function ==========================================



const addNewBox = (x,y,z,path) => {
  const boxTexture = new THREE.TextureLoader().load(path)

  const boxGeometry = new THREE.BoxGeometry(0.2,0.2,0.2);
  const boxMaterial = new THREE.MeshPhongMaterial({
    map: boxTexture,
  }) 
  const boxMesh = new THREE.Mesh(boxGeometry,boxMaterial);
  boxMesh.position.set(x,y,z);
  scene.add(boxMesh)
}

// addNewBox(3,2,30);
// addNewBox(3,4,30);
// addNewBox(3,6,30);
// addNewBox(3,8,30);
// addNewBox(3,10,30);


// const terraTextura = new THREE.TextureLoader().load('terra.jpg');

// const geometry_terra = new THREE.SphereGeometry( 2, 32, 20 ); 
// const material_terra = new THREE.MeshStandardMaterial({map: terraTextura })


const addNewSphere = (x,y,z,path) => {
  const SphereTexture = new THREE.TextureLoader().load(path)

  const SphereGeometry = new THREE.SphereGeometry( 2, 32, 20 );
  const SphereMaterial = new THREE.MeshStandardMaterial({map: SphereTexture })

  const SphereMesh = new THREE.Mesh(SphereGeometry,SphereMaterial);
  SphereMesh.position.set(x,y,z);
  scene.add(SphereMesh)
}

addNewBox(-3.7,0,46,'three_logo.png');
addNewBox(-3.4,0,46,'js_logo.png');
addNewBox(-3.1,0,46,'vite_logo.png');
addNewBox(-2.8,0,46,'html_logo.png');
// ===============================================

// ============== raycaster ====================
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
 
const onMouseMove = (event)=>{
  pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(pointer, camera)

  const intersects = raycaster.intersectObjects(scene.children)

  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  if(intersects.length > 0){

    // random color 
    // intersects[0].object.material.color.set('#'+randomColor);

     

    intersects[0].object.rotation.x += .005;
    intersects[0].object.rotation.y += .01;
    intersects[0].object.rotation.z += .001


  }

}
window.addEventListener('mousemove', onMouseMove)
// ============= raycaster =============

const max =  46.5

const heightTela = window.screen.height;
const widthTela = window.screen.width;

// define o tamanho da tela 
const main = document.getElementById('main').style.height = heightTela * 12.4 +'px'

const titleAbout = document.getElementById('title_about');
const textAbout = document.getElementById('text_about');


function moveCamera() {

  
  
  const t = document.body.getBoundingClientRect().top;
   

  var div = $( "#regua" );
var offset = div.offset();
 
var topo = offset.top;
console.log(topo)
 
   
  // var div = document.getElementById('regua');
  // var position = div.getBoundingClientRect()
  // console.log(position.top)
  
    

  

    if(t* -0.004 + 27.4 >= 30 && t* -0.004 + 27.4 <= 31.4){

      textAbout.innerHTML = "Portifólio Virtual de Apresentação"
      camera.position.z = 30


    }
    if((t* -0.004 + 27.4) >= 31.5 && (t* -0.004 + 27.4) <= 36.6){

      textAbout.innerHTML = "Em apenas uma semana, a equipe da Fábrica de Software 276 do SENAC construiu e programou uma aranha robótica do zero, com o auxílio dos professores, transformando-a em um adorável mascote para a turma"

    }

    if((t* -0.004 + 27.4) >= 36.5 && (t* -0.004 + 27.4) <= 40){

      textAbout.innerHTML = "Ao vencer em primeiro lugar na minha primeira maratona aberta ao público, sinto-me motivado a continuar treinando e superando meus limites para alcançar novos triunfos no mundo das tecnologias. A experiência foi gratificante e reforça cada vez mais a minha paixão por essa área."

    }

    if((t* -0.004 + 27.4) >= 41.6 && (t* -0.004 + 27.4) <= 45.8){

      textAbout.innerHTML = "A música é a minha paixão, e o violino é meu refúgio. Com orgulho, compartilho essa apresentação no workshop de violino, conduzido pelo talentoso professor Generoso Barros de Arruda, que me inspira a mergulhar ainda mais fundo no mundo da melodia e da arte. Através do violino, encontro minha expressão mais verdadeira e emocionante."

    }

    if((t* -0.004 + 27.4) >= 47 ){

      textAbout.innerHTML = "Esse Portifólio foi feito em decorrer de um 1 dia(06/08/2023)."

    }

    console.log((t* -0.004 + 27.4))
    

    if((t* -0.004 + 27.4) >= 30 && (t* -0.004 + 27.4) <= 47){
       
      camera.position.z = t* -0.004 + 27.4
      
  
    }

     
    
    


  // }
  // else {
  //   camera.rotation.y = 0 ;
  // }
 
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;
  
   
  // camera.position.x = t * 0.001 -3;
  
   
 
}

document.body.onscroll = moveCamera;
 




function animate(){
  requestAnimationFrame(animate)

  terra.rotation.x += .005;
  terra.rotation.y += .001;
  terra.rotation.z += .001


  // cube_aranha.rotation.x += .005;
  // cube_aranha.rotation.y += .001;
  // cube_aranha.rotation.z += .001

  // cube_maratona.rotation.x += .005;
  // cube_maratona.rotation.y += .001;
  // cube_maratona.rotation.z += .001
  
  // cube_violino.rotation.x += .005;
  // cube_violino.rotation.y += .001;
  // cube_violino.rotation.z += .001
 
  // controls.update()
  renderer.render(scene,camera)
}


animate()