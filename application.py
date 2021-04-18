from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)


@app.route("/")
def index():
	return render_template("index.html")

@app.route("/favicon.ico")
def icon():
    return send_from_directory(os.path.join(app.root_path, "static/images"),
                               "favicon.ico", mimetype="image/vnd.microsoft.icon")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/account")
def account():
    return render_template("account.html")

@app.route("/publishers")
def publishers():
    return render_template("publishers.html")

@app.route("/publish")
def publishApp():
	return render_template("publishapp.html")

@app.route("/publisher/<publisherName>")
def publisher(publisherName):
    return render_template("publisher.html", publisher=publisherName)

@app.route("/<notFoundPage>")
def notFound(notFoundPage):
    return render_template("404.html")

if __name__ == "__main__":
	app.run(debug=True)
