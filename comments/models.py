from django.db import models

class Comment(models.Model):
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    meal = models.ForeignKey(
        "plants.Plant",
        related_name="comments",
        on_delete=models.CASCADE
    )