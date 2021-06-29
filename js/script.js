const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages : [
            {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
            },
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages : [
            {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            },
        ]
    },
    // {
    //     name: 'Ghandalf',
    //     avatar: '_3',
    //     visible: true,
    //     messages : []
    // },

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
        contacts,    
        messaggi : contacts[0].messages,
        nomeContatto : contacts[0].name,
        nome : contacts[0].name, //parte inizializzato dal primo contatto in lista
    },
            
   
    methods: {
        visualizza(){
            console.log("ciao");
            console.log(contacts[0].name);
            console.log(contacts[0].messages[1]);
        },
       
        visualizza_msg(index){
            this.messaggi = contacts[index].messages,
            console.log(this.messaggi);
            console.log(this.nome);
            this.nome = contacts[index].name;
        }

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