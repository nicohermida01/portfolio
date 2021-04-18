<?php include("header.php"); ?>

    <!-- ************************************************** PROJECTS ************************************************** -->
    <div class="container" id="projects">
        <!-- Title -->
        <div class="row justify-content-center">
            <div class="col-5">
                <h1>My Projects</h1>
            </div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <a href="#scrabbleAr"><button type="button" class="btn btn-outline-primary">ScrabbleAr</button></a>
            <a href="#"><button type="button" class="btn btn-outline-primary">Option 2</button></a>
            <a href="#"><button type="button" class="btn btn-outline-primary">Option 3</button></a>
        </div>
    </div>

    <!-- ScrabbleAr -->
    <div class="container" id="scrabbleAr">
        <img src="images/projects/scrabbleAr/logo.png" alt="" id="scrabbleLogo">

        <div class="row justify-content-center">
            <div class="col-7">
                <!-- Slide -->
                <div id="scrabbleSlide" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#scrabbleSlide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#scrabbleSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#scrabbleSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <!-- Content -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/projects/scrabbleAr/menu.png" class="d-block w-100" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="images/projects/scrabbleAr/juego1.png" class="d-block w-100" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="images/projects/scrabbleAr/juego2.png" class="d-block w-100" alt="">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#scrabbleSlide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#scrabbleSlide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Description card -->
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="card">
                    <div class="card-header">
                        <span class="float-start"><i class="fas fa-code"></i></span>About<span class="float-end invisible"><i class="fas fa-code"></i></span>
                    </div>
                    <div class="card-body"><p>
                        Scrabble is a board game in which players try to score as many points as possible by building words on a board. <br>
                        "ScrabbleAr" is an adaptation of this game taken to digital form. <br>
                        </p>
                        <a id="scrabbleLink" href="https://github.com/nicohermida01/ScrabbleAR" target="_blank" ><i class="fab fa-github"></i>&nbsp ScrabbleAr - GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include("footer.php"); ?>