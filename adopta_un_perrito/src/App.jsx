import Header from './componets/Header';
import MyCard from './componets/MyCard';
import Imagen1 from './assets/img/imagen1.jpg';
import Imagen2 from './assets/img/imagen2.jpg';
import Imagen3 from './assets/img/imagen3.jpg';
import Imagen5 from './assets/img/imagen5.jpg';
import Footer from './componets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {

  return (
    <>
    <div>
      <Header title="Adopta un perrito"/>
      <div className='row'>
      <MyCard
        imagen= {Imagen1}
        title="Bartolo"
        text="Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
        bg="success"
        buttonText="Husky"
      />
       <MyCard
       imagen= {Imagen2}
        title="Messi"
        text="Es Juguetón , amigable y se lleva bien con niños y otros animales.¡haz de Messi parte de tu familia hoy mismo!"
        bg="primary"
        buttonText="Golden Retriever"
      />
       <MyCard
        imagen= {Imagen3}
        title="Gohan"
        text="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
        bg="danger"
        buttonText="Shetland sheepdog"
      />
       <MyCard
       imagen= {Imagen5}
        title="Princesa"
        text="Es una compañera leal y cariñosa que adora los mimos y los abarzos.¡Ayuda a Princesa a encontrar su final feliz!."
        bg="warning"
        buttonText="Beagle"
      />
      <Footer/>
      </div>
      </div>
    </>
  )
};

export default App;
