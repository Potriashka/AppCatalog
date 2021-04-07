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

@app.route("/signin")
def signin():
    return render_template("signin.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/account")
def account():
    return render_template("account.html")

@app.route("/publishers")
def publishers():
    return render_template("publishers.html")

if __name__ == "__main__":
	app.run(debug=True)
