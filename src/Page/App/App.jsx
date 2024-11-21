import React from 'react';
import moment from 'moment';
import './App.css';
import Card from '../Card/Card.js'
import dvor from '../../img/dvor.jpg'
import brod from '../../img/brod.jpg'
import pastel from '../../img/pastel.jpg'
import shagal from '../../img/shagal.jpg'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handlerCardClick = this.handlerCardClick.bind(this)

    this.state = {
      toggleCard: false,
      selectedCard: undefined,
      dataOfEvent: [
        {
          id: 0,
          image: dvor, 
          name: 'Дворянское воспитание. Обычаи и традиции',
          expo: {name:'Остафьево', address: "Лаврушинский пер., 10"},
          begin: "2024-05-31",
          end: "2024-11-17",
          date: 'Идёт сейчас, до: 24.11.2024',
          src: '#',
          description: "бла-бла-бла"
        }
      ]
    }
  }

  componentDidMount() {
    fetch('https://gglp-fitr-afisha-api-0dc7.twc1.net/events/')
      .then(res => res.json())
      .then(data => {this.setState( prevState => {
        return{
          ...prevState,
          dataOfEvent: data
        }
      })
    })
  }

  handlerCardClick(e) {
      this.setState( prevState => {
        this.selectedCard = prevState.dataOfEvent[e.target.parentElement.id]
        console.log
        return{
          ...prevState,
          toggleCard: !prevState.toggleCard,
          selectedCard: prevState.dataOfEvent[e.target.parentElement.id]
        }
      })
  }


  render() {
    return (
    <main className={"main" + (!this.state.toggleCard ? ' list': ' toggleCard')}>
      { !this.state.toggleCard ? this.state.dataOfEvent.map((item) => 
        (
          <Card key={item.id} id={item.id - 1} img={brod} name={item.name} place={item.expo.name + '. Адрес - ' + item.expo.address} date={moment(item.begin).diff(moment(), 'days') > 0 ? 'Идёт с ' + item.begin + ', до ' + item.end : (moment(item.end).diff(moment(), 'days') > 0 ? 'Идёт сейчас, до ' + item.end : 'Сейчас уже закрылась :(')} src={item.src} onClick={this.handlerCardClick}/>
        )) : 
        <>
          <h3 className='name'>
            {this.state.selectedCard.name}
          </h3>
          <img src={brod} className='img'/>
          <p className='date'>
            {moment(this.state.selectedCard.begin).diff(moment(), 'days') > 0 ? 'Идёт с ' + this.state.selectedCard.begin + ', до ' + this.state.selectedCard.end : (moment(this.state.selectedCard.end).diff(moment(), 'days') > 0 ? 'Идёт сейчас, до ' + this.state.selectedCard.end : 'Сейчас уже закрылась :(')}
          </p>
          <p className='place'>
            {this.state.selectedCard.expo.name + '. Адрес - ' + this.state.selectedCard.expo.address}
          </p>
          <p className='description'>
            {this.state.selectedCard.description}
          </p>
          <button className='buttonBack' onClick={this.handlerCardClick}>Назад</button>
        </>
      }
    </main>
    );
  }
}

export default App;
