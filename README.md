WEB DATA MANAGEMENT

CSE 5335

PROJECT 3

NAME: REHANA DEVANI ID: 1001100807 NET ID: rxd0807

1.  What aspect of the implementation did you find easy, if any, and
    why?

I found sending AJAX requests to the server, loading data from MongoDB
and displaying the retrieved data on the web page quite easy as it was
similar to previous projects.

2.  What aspect of the implementation did you find hard, if any, and
    why?

Displaying only 20 records at a time and removing old records as new
ones arrive was quite difficult because the time at which each record
was retrieved from database had to be considered. Later I was able to
implement this logic by using the concept of mod values.

3.  If you were to use these technologies professionally, what would be
    your biggest concern?

Few reasons to use Node.js: 1. Node.js is best-suited for real-time
applications where what one user does with the application needs to be
seen by other users immediately, without a page refresh.

2.  Infact, any situation where code might block due to threads can be
    better addressed by Node.js.

3.  The single-threaded event-driven system is fast even when handling
    many requests at once compared to traditional multi-threaded Java.

Concerns about Node.js:

1.  Nested callback is one of the concerns of
    using Node.js though there are different solutions to this.

2.  Dealing with files can be little bit of pain. There is no simple way
    in Node.js to read one record at a time from CSV file.

3.  Due to the ever-growing pool of packages that make one Node.js
    project appear radically different from the next, it is harder for a
    new developer to jump in on a Node project.

4.  Some packages under NPM are a little raw, and still under rapid
    development. There is no mechanism to rate the package which has
    lead to many package doing more or less the same thing.

5.  Node.js runs JavaScript which does not have compile-time type
    checking. Static type checking is needed for large, complex safety
    critical systems and projects which include collaboration between
    different organizations.

Concerns about jQuery:

1.  While jQuery has an impressive library, depending on how much
    customization you require on your website, functionality may be
    limited thus using raw JavaScript will be inevitable in some cases.

2.  The jQuery JavaScript file is required to run jQuery commands. While
    the size of this file is relatively small, it is a drain on client
    machine or even the web server, if you intend to host the website on
    your own web server.

3.  There is a tight dependency between DOM and JavaScript in jQuery.
    This is unfortunate as it makes it harder to write decoupled code
    due to the hard dependency on DOM.

4.  jQuery is not a small sized library! Even though the user browsers
    may cache it from other websites, it is still a large library. I
    think the main disadvantage is the code overhead. Whenever we call a
    jQuery method, it first needs to figure out what to do and then does
    it.

5.  We don't use all of jQuery, just a few parts. Carrying the whole
    jQuery library on a site is therefore a slight bandwidth waste and a
    slowdown. It is possible to build our own jQuery library, but very
    few actually do that.


