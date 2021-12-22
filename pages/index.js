import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const dummy_meetups = [
  {
    id: 'm1',
    title: 'A first date',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    adress: 'Some Adress, 1235',
    description: 'This is first meetup description',
  },
  {
    id: 'm2',
    title: 'A second date',
    image:
      'https://media.istockphoto.com/photos/eiffel-tower-aerial-view-paris-picture-id1145422105?k=20&m=1145422105&s=612x612&w=0&h=IVTtz9ao9ywd5AltRNbr_K64LeuHeJ68J9ivjpztbEs=',
    adress: 'Second Adress, 556224',
    description: 'This is second meetup description',
  },
  {
    id: 'm3',
    title: 'A third date',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-wAFaHGiOispDH6SpBoPgwH57WlUUSJF9qvUxgQCZZHLPvMIUVibRgO1Z8SYEgINfRQ&usqp=CAU',
    adress: 'Third Adress, 1235',
    description: 'This is third meetup description',
  },
];

function HomePage(props) {
  return (
    <Layout>
      <MeetupList meetups={props.meetups} />
    </Layout>
  );
}


export async function getStaticProps(){

  return {

    props:{

      meetups:dummy_meetups
    }

  }



}

export default HomePage;
