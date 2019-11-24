<template>
  <div>
    <span>Your Balance: {{ balance }}</span>
    <span v-if="checked.length > 0">Bets: {{ checked }}</span>
    <span v-if="result">Spin Result: {{ result }}</span>
    <span class="green" v-if="roundWinnings">Round Winnings: {{ roundWinnings }}</span>
    </div>
</template>
<script></script>
<style></style>