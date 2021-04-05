from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
	return render_template("index.html")

@app.route("/favicon.ico")
def icon():
    return send_from_directory(os.path.join(app.root_path, "static/images"),
                               "favicon.ico", mimetype="image/vnd.microsoft.icon")

if __name__ == "__main__":
	app.run(debug=True)
