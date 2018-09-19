<template>
    <div class="container">
        <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
        <app-new-quote @quoteAdded="addQuote($event)"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote(index)"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Click the quote to delete it.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';
    export default {
        data() {
            return {
                maxQuotes: 10,
                quotes: [
                    "Initial quote"
                ]
            }
        },
        components: {
            'app-quote-grid': QuoteGrid,
            'app-new-quote': NewQuote,
            'app-header': Header
        },
        methods: {
            addQuote(quote){
                if(this.quotes.length < this.maxQuotes) {
                    this.quotes.push(quote);
                } else {
                    alert('Reached max number of quotes');
                }
                
                //console.log(this.quotes);
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
                //console.log(this.quotes);
            }
        }
    }
</script>

<style>
</style>
