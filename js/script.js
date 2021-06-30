const contacts = [
    {
        name: 'michele',
        avatar: '_1',
        visible: true,
        colore: false,
        messages : [
            {date: '10/01/2020 15:30:55',text: 'Hai portato a spasso il cane?',status: 'sent'},
            {date: '10/01/2020 15:50:00',text: 'Ricordati di dargli da mangiare',status: 'sent'},
            {date: '10/01/2020 16:15:22',text: 'Tutto fatto!',status: 'received'},
        ],
    },
    {
        name: 'fabio',
        avatar: '_2',
        visible: true,
        colore: false,
        messages : [
            {date: '20/03/2020 16:30:00',text: 'Ciao come stai?',status: 'sent'},
            {date: '20/03/2020 16:30:55',text: 'Bene grazie! Stasera ci vediamo?',status: 'received'},
            {date: '20/03/2020 16:35:00',text: 'Mi piacerebbe ma devo andare a fare la spesa.',status: 'sent'},
            {date: '20/03/2020 16:49:00',text: 'Questo è il mio ultio messaggio',status: 'sent'},
        ]
    },
    {
        name: 'gandalf',
        avatar: '_3',
        visible: true,
        messages : [
            {date: '20/03/2020 16:49:00',text: 'TU NON PUOI PASSAREE!!!!',status: 'sent'},
            {date: '20/03/2020 16:49:00',text: 'e invece si hahaha',status: 'received'},
        ]
    },

    // {
    //     name: 'Bilbo',
    //     avatar: '_4',
    //     visible: true,
    //     messages : []
    // },
    // {
    //     name: 'Radagast',
    //     avatar: '_5',
    //     visible: true,
    //     messages : []
    // },
    // {
    //     name: 'Franco',
    //     avatar: '_5',
    //     visible: true,
    //     messages : []
    // },
    // {
    //     name: 'Gianni',
    //     avatar: '_5',
    //     visible: true,
    //     messages : []
    // },
    // {
    //     name: 'Arancia',
    //     avatar: '_5',
    //     visible: true,
    //     messages : []
    // },
    // {
    //     name: 'Pesca',
    //     avatar: '_5',
    //     visible: true,
    //     messages : []
    // },
    // {
    //     name: 'Non so cosa scrivere',
    //     avatar: '_5',
    //     visible: true,
    //     messages : []
    // },
];

var app = new Vue({
    el : "#app",
    data: {
        contacts, // == contacts : contacts    
        // messaggi : contacts[0].messages,
        // nome : contacts[0].name, //parte inizializzato dal primo contatto in lista
        // ultimoAccesso : contacts[0].messages[0].date
        contact : contacts[0],
        indice : 0,
        messaggio:"", //v-model per l'inserimento di nuovi messaggi
        ricerca:"", //v-model per la barra di ricerca        
        n:"", //creo un nuovo oggetto della libreria dayjs
    },
    computed:{
        filteredContacts(){
            console.log(this.ricerca);
            //restituisce un array contenente gli elementi di contacts che 
            //hanno in .name una parte o tutta la stringa contenuta in
            return contacts.filter(element => {
                return element.name.includes(this.ricerca);
            });
        }
    },
   
    methods: {
      
        visualizza_msg(index){
            //lavorando sull'array contacts
            // this.messaggi = contacts[index].messages,
            // this.nome = contacts[index].name;
            // let lastItem = contacts[index].messages.length - 1;
            // this.ultimoAccesso = contacts[index].messages[lastItem].date;
            
            //lavorando sul singolo contatto ad ogni click
            this.contact = this.contacts[index];
            this.indice = index;
            
            // console.log(this.n.format().toDate());

        },
        addColor(item,n){
            
            contacts.forEach((element,index) => {
                if(index != n){
                    element.colore = false;
                }
                else{
                    contacts[n].colore = true;
                }
                console.log(element.name , element.colore);
            });
        },
        tempo(){
            this.n =  dayjs();
            return this.n.format("YYYY-MM-DD") + " " +this.n.format("HH:mm:ss");
        },
        pushMsg(){

            //prendo data e ora di invio del messaggio
           
            // console.log(this.n.format("YYYY-MM-DD"),this.n.format("HH:mm:ss"));
            //push del messaggio nell'array
            this.contact.messages.push(
                {
                    date: this.tempo(), //prendo la data e l'ora corrente
                    text: this.messaggio,
                    status: 'sent'
                }
            );
            //svuota l'input text
            this.messaggio="";
            //risposta di default a tutti i messaggi
            // let time = this.tempo();
            setTimeout(function(){
                app.contact.messages.push(
                    {
                        date: app.tempo(), //prendo la data e l'ora corrente
                        text: "ok",
                        status: 'received'
                    }
                );
            },1000);
        },
    },
})


// visualizza msg con backtick
// visualizza_msg(item){
        //     console.log(item.messages);
        //     let tag = document.getElementById("messaggi");
        //     tag.innerHTML = "";
        //     // let state = item.messages;
        //     // console.log(state);
        //     item.messages.forEach((element,index) => {
                
        //         console.log(element.text);
        //         console.log(index);

        //         //bug in v-if v-else
        //         console.log(element.status);
        //         let msg;
        //         if (element.status == 'received') {
        //             msg = 'msg_received'
        //         }
        //         else{
        //             msg = 'msg_sent'
        //         }
        //         tag.innerHTML +=`
        //         <div>
        //             <div class="message clearfix ${msg}">${element.text}</div>
        //         </div>
               
        //         `;
// }