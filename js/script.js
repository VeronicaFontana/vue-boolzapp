const dt = luxon.DateTime;

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                    clicked: false
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                    clicked: false
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                    clicked: false
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    clicked: false
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                    clicked: false
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                    clicked: false
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                    clicked: false
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    clicked: false 
                }
            ],
            newMessage: 
                {
                    date: "",
                    message: "",
                    status: 'sent'
                },
            newResponse:
                {
                    date: "",
                    message: "Non posso rispondere ora :(",
                    status: 'received'
                },
            cliccato: null,
            indice: null,
            flag: false,
            clock: "",
            ricercaParola: "",
            iniziale: []
        }
    }, 
    methods:{
        addMessage(){
            this.contacts[this.indice].messages.push(this.newMessage)
            
            setTimeout(()=>{
                this.contacts[this.indice].messages.push(this.newResponse)
            },2000)

            this.newMessage = 
            {
                date: '10/01/2020 15:30:55',
                message: "",
                status: 'sent'
            }

            console.log(this.newMessage)
        },
        click(index){
            if(this.contacts[index].clicked && this.flag === true){
                this.contacts[index].clicked = false;
                this.flag = false;
                this.cliccato = false;
            }else if(this.contacts[index].clicked === false && this.flag === false){
                this.contacts[index].clicked = true;
                this.cliccato = true;
                this.indice = index;
                this.flag = true;
            }
        },
        printClock(){
            this.clock = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE)
        },
        search(parola){
            this.iniziale = this.contacts.filter((contact)=>{
                console.log("partito")
                return contact.name === parola
            })
            console.log(this.iniziale)
        },
        removeMessage(index, indice){
            console.log(index, indice)
            this.contacts[index].messages.splice((this.contacts[index].messages[indice]), 1)
            console.log(index, indice)
        }
    }, 
    mounted(){
        this.printClock()
    }
}).mount("#app")