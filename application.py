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
    return render_template('about.html')

if __name__ == "__main__":
	app.run(debug=True)
