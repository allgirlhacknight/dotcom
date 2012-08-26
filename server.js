var express = require( "express" ),
	app = express(),
	doT = require( "doT" ),
	pages = {};

app.configure( function() {
	app.set( "views",  __dirname + "/views" );
	app.set( "view engine", "html" );
	app.register( ".tmpl", doT );
	app.use( express.bodyParser() );
	app.use( express.methodOverride() );
	app.use( app.router );
	app.use( express.static( __dirname + "/public" ) );
});

var site_settings = {
	title: "Austin All-Girl Hack Night",
	cc: new Date().getFullYear()
};

// home
app.get( "/", function( req, res ) {
	// load latest 2 or 3 blog posts
	// load this week's calendar
	// render
});

app.get( "/calendar", function( req, res ) {
	// load current month
	// render
});

app.get( "/jobs", function( req, res ) {
	// load up to 20 jobs
	// render
});

app.get( "/blog/:id", function( req, res ) {
	// load individual blog post by id
	// if id absent, load most recent 5 blog posts
	// render
});

app.get( "blog/archive", function( req, res ) {
	// load all blog post titles/dates/ids sorted by date, up to 2 years
	// render
});

/* CMS - for later
app.get( "/:page_name", function( req, res ) {

	var page = pages[ req.page_name ];
	app.render( req.page_name, page.getData( site_settings ) );

});
*/

app.listen( 1337 );
