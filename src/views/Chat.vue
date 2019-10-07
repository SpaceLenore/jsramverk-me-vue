<template>
<div class="outer-wrap">
    <Navbar/>
    <div class="content-wrap">
        <div class="chat-group" v-if="user">
        <div class="messages">
            <div class="msg" v-for="(msg, index) in messages" :key="index">
                <p><span class="font-weight-bold">{{ msg.user }} </span>{{ msg.message }}</p>
            </div>
        </div>
        <form class="sendbox" @submit.prevent="sendMessage">
            <input class="messagebox" type="text" v-model="message" placeholder="Message">
            <button type="submit" class="send">Send</button>
        </form>
    </div>
    <div v-else class="nickbox-wrap">
        <div class="nickbox">
            <h1 class="content-header">Chatroom</h1>
            <span class="fieldset">
                <label for="nick">Nickname</label>
                <input class="input-field" type="text" name="nick" v-model="setnick" @keyup.enter="joinChat">
            </span>
            <input class="join" type="button" name="nick" value="join chat" @click="joinChat">
        </div>
    </div>
    </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import io from 'socket.io-client'

export default {
    data() {
        return {
            setnick: '',
            user: '',
            message: '',
            messages: [],
            socket : null
        }
    },
    components: {
        Navbar
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
            if (this.message) {
                this.socket.emit('msg', {
                    user: this.user + ':',
                    message: this.message
                });
                this.message = ''
            }
        },
        joinChat() {
            if (this.setnick) {
                this.socket = io('wsc.hackerti.me');
                this.user = this.setnick
                this.socket.on('msg', (data) => {
                    this.messages.push(data);
                    let msglist = document.getElementsByClassName('messages')[0]
                    msglist.scrollTop = msglist.scrollHeight;
                })
                this.socket.emit('msg', {
                    user: '-->',
                    message: this.user + ' has join the chat'
                })
            }
        }
    },
    beforeDestroy() {
        this.socket.emit('msg', {
            user: '<--',
            message: this.user + ' has left the chat'
        });
        this.socket.disconnect();
    }
}
</script>

<style>
    .content-wrap {
        color: #fff;
        width: 95%;
        padding: 0;
    }

    .nickbox-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }

    .nickbox {
        width: 50%;
        height: 50%;
        margin: auto;
    }

    .fieldset:focus-within > label {
        color: #ff9a56;
    }

    input:focus {outline:0;}

    .input-field {
        padding: 5px;
        font-size: 1.2rem;
        border: 4px solid #fff;
        background:rgba(18, 22, 36, 0);
        color: #fff;
    }

    .join {
        padding: 0.5rem;
        font-size: 1.4rem;
        border: 4px solid #ff9a56;
        background: #ff9a56;
        color: #fff;
        cursor: pointer;
    }
    
    .join:hover {
        border: 4px solid #fff;
        background: none;
    }

    .messages {
        height: 84vh;
        overflow-y: scroll;
    }

    .sendbox {
        height: 5vh;
        width: 100%;
        display: flex;
    }

    .messagebox {
        height: 100%;
        width: 100%;
        padding: 0 10px;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        border-bottom: none;
        border-right: none;
        background:rgba(18, 22, 36, 0);
        color: #fff;
    }

    .send {
         height: 100%;
        width: 15%;
        font-size: 1.2rem;
        border: 4px solid #ff9a56;
        background: #ff9a56;
        color: #fff;
        cursor: pointer;
    }
    
    .send:hover {
        border: 4px solid #fff;
        background: none;
    }
</style>