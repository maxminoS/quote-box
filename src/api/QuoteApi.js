export default {
  getQuote: async function() {
    try {
      const response = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
      const quotes = await response.json();
      return quotes;
    } catch (error) {
      throw error;
    }
  }
}
