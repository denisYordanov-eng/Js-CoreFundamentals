function findMovieTicket([movie, day]) {

  let movieTitle = movie.toLowerCase();
   let movieDay= day.toLowerCase();

    let ticketCost = 0;

    if (movieTitle === "the godfather"){
        if(movieDay === "monday"){
            ticketCost = 12;
        }else if(movieDay === "tuesday"){
            ticketCost = 10;
        }else if(movieDay === "wednesday"){
            ticketCost = 15;
        }else if(movieDay === "thursday"){
            ticketCost = 12.50;
        }else if(movieDay === "friday"){
            ticketCost = 15;
        }else if(movieDay === "saturday"){
            ticketCost = 25;
        }else if(movieDay === "sunday"){
            ticketCost = 30;
        }
    }else if(movieTitle === "schindler's list"){
        if(movieDay === "monday"){
            ticketCost = 8.50;
        }else if(movieDay === "tuesday"){
            ticketCost = 8.50;
        }else if(movieDay === "wednesday"){
            ticketCost = 8.50;
        }else if(movieDay === "thursday"){
            ticketCost = 8.50;
        }else if(movieDay === "friday"){
            ticketCost = 8.50;
        }else if(movieDay === "saturday"){
            ticketCost = 15;
        }else if(movieDay === "sunday"){
            ticketCost = 15;
        }
    }else if(movieTitle === "casablanca"){
        if(movieDay === "monday"){
            ticketCost = 8;
        }else if(movieDay === "tuesday"){
            ticketCost = 8;
        }else if(movieDay === "wednesday"){
            ticketCost = 8;
        }else if(movieDay === "thursday"){
            ticketCost = 8;
        }else if(movieDay === "friday"){
            ticketCost = 8;
        }else if(movieDay === "saturday"){
            ticketCost = 10;
        }else if(movieDay === "sunday"){
            ticketCost = 10;
        }
    }else if(movieTitle === "the wizard of oz"){
        if(movieDay === "monday"){
            ticketCost = 10;
        }else if(movieDay === "tuesday"){
            ticketCost = 10;
        }else if(movieDay === "wednesday"){
            ticketCost = 10;
        }else if(movieDay === "thursday"){
            ticketCost = 10;
        }else if(movieDay === "friday"){
            ticketCost = 10;
        }else if(movieDay === "saturday"){
            ticketCost = 15;
        }else if(movieDay === "sunday"){
            ticketCost = 15;
        }
    }
    if(ticketCost > 0){
        console.log(ticketCost);
    }else {
        console.log("error");
    }
}
