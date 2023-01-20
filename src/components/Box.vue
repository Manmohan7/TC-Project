<template>
  <div class="box rounded-corners">
    <div class="column gap-24">
      <h1 class="header">Sign In</h1>

      <div class="input-group column">
        <label>Username</label>
        <input name="username" type="text" placeholder="john" v-model="username" />
      </div>

      <div class="input-group column">
        <label>Password</label>
        <input name="password" type="password" placeholder="doe" v-model="password" />
      </div>

      <Button @handleClick="verifyUser()" />
    </div>
    
  </div>
</template>

<script>
import router from '../router';

export default {
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  
  methods: {
    verifyUser() {
      if(this.authenticateUser(this.username, this.password)) {
        router.push('/home')
      } else {
        window.alert('invalid creds')
      }
    }
  }
}
</script>

<style scoped>
.box {
  padding: 20px;
  margin-top: 72px;
  width: 80%;
  max-width: 768px;
}

.rounded-corners {
  border-radius: 20px;
  box-shadow: 0 0 15px 10px rgba(150,150,150, 0.3);
}

.header {
  margin-bottom: 18px;
}

.input-group input {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  margin-top: 8px;

}
</style>